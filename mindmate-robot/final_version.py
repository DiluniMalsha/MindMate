#import required libraries 
import cv2 as cv
import numpy as np
import face_recognition
from fer import FER
import time
import datetime as dt
#import playsound as ps
#import pyautogui
import requests
import json
#from gpiozero import AngularServo
import pygame

pygame.mixer.init()

# import math
# from gpiozero.pins.pigpio import PiGPIOFactory

# factory = PiGPIOFactory()
# servo = AngularServo(18, min_pulse_width=0.5/1000, max_pulse_width=2.5/1000)
# servo.angle = 30
# prev_angle = 30
# print("Servo init!!!")
time.sleep(0.5)

#interface defaults
background = None
theme_color = (200,190,20)
background_color = (0,0,0)
robot_name = "EMORA"

#emotion dictionary
emotion_dic = {"angry": 1, 
                "disgust": 2, 
                "fear": 3, 
                "sad": 4, 
                "neutral": 5, 
                "surprise": 6, 
                "happy": 7}

#set interfaces to fullscreen
cv.namedWindow("EMORA", cv.WND_PROP_FULLSCREEN)
cv.setWindowProperty("EMORA",cv.WND_PROP_FULLSCREEN,cv.WINDOW_FULLSCREEN)

#method to play verbal commands/songs
def play_audio(file_name):
    pg_audio = pygame.mixer.Sound(f'media/{file_name}.wav')
    playing = pg_audio.play()
    while playing.get_busy():
        pygame.time.delay(100)

#method to display images
def display_image(file_name):
    dis_img = cv.imread(f'media/{file_name}.jpg')
    cv.imshow("EMORA", dis_img)
    cv.waitKey(5000)

#method to play videos
def play_video(file_name):
    vid_cap = cv.VideoCapture(f'media/{file_name}.mp4')
    while(True):
        _vid, vid_frame = vid_cap.read()
        if not _vid:
            break
        vid_frame1 = cv.resize(vid_frame, (1920, 1080), interpolation=cv.INTER_LINEAR)
        cv.imshow("EMORA", vid_frame1)
        if(cv.waitKey(1) & 0xFF == ord('q')):
            break

    vid_cap.release()

#get
def get_data():
    url = "http://18.143.151.234:8080/api/response"
    incoming = requests.get(url)

    if(incoming.status_code == 200):
        incoming_data = incoming.content.decode('utf-8')
        return incoming_data
    else:
        return 0

#post
def post_data(emo_id):
    url = 'http://18.143.151.234:8080/api/emotion'
    data = {'emotionId': emo_id}
    x = requests.post(url, json = data)
    #print(x.text) 

#interfaces

def reminder(task):

    background = np.zeros((1080,1920,3), dtype= np.uint8)
    #pos = pyautogui.position()
    
    #current data and time
    dateTime = dt.datetime.now()
    strDateTime = (dateTime.strftime("%d-%m-%Y   %H:%M"))

    #display robot name and current date and time
    cv.putText(background, robot_name, (32,1060), cv.FONT_HERSHEY_DUPLEX, 1, theme_color, 1)
    cv.putText(background, strDateTime, (1532,1060), cv.FONT_HERSHEY_DUPLEX, 1, theme_color, 1)

    task_len = len(list(task))*18
    cv.line(background, (960,340), (960,300), theme_color, 5) # | 
    cv.line(background, (930,300), (990,300), theme_color, 5) # -
    cv.line(background, (960,360), (960,380), theme_color, 3) 
    cv.line(background, (780,540), (800,540), theme_color, 3) 
    cv.line(background, (960,720), (960,700), theme_color, 3) 
    cv.line(background, (1120,540), (1140,540), theme_color, 3) 
    cv.ellipse(background, (800,360), (75,75), 145, 0, 180, theme_color, -1) # /
    cv.ellipse(background, (1120,360), (75,75), 215, 0, 180, theme_color, -1) # \
    cv.ellipse(background, (840,540), (180,180), 150, 0, 60, theme_color, 7) # (
    cv.ellipse(background, (800,540), (200,200), 140, 0, 80, theme_color, 7) # (
    cv.ellipse(background, (1080,540), (180,180), 330, 0, 60, theme_color, 7) # )
    cv.ellipse(background, (1120,540), (200,200), 320, 0, 80, theme_color, 7) # )
    cv.circle(background, (960,540), 200, theme_color, 5)
    cv.circle(background, (960,540), 10, theme_color, -1)
    cv.line(background, (960,540), (1040,400), theme_color, 5)
    cv.line(background, (960,540), (1060,610), theme_color, 5)
    cv.line(background, (840,700), (780,760), theme_color, 5) # /
    cv.line(background, (1080,700), (1140,760), theme_color, 5) # \
    cv.putText(background, task, (960-task_len,900), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 1)

    cv.imshow('EMORA', background)
    cv.waitKey(2000)
    play_audio('reminder_tone')

def music():
    cv.line(background, (885,640), (885,300), theme_color, 20) # |
    cv.line(background, (885,300), (1205,240), theme_color, 20) # -
    cv.line(background, (1205,580), (1205,240), theme_color, 20) # |
    cv.ellipse(background, (800,640), (95,75), 0, 0, 360, theme_color, -1) # o
    cv.ellipse(background, (1120,580), (95,75), 0, 0, 360, theme_color, -1) # o

def sleeping():
    background = np.zeros((1080,1920,3), dtype= np.uint8)

    cv.line(background, (860,640), (1060,640), theme_color, 10) # -
    cv.ellipse(background, (720,360), (90,25), 0, 0, 180, theme_color, -1) # U
    cv.ellipse(background, (1200,360), (90,25), 0, 0, 180, theme_color, -1) # U
    cv.ellipse(background, (720,340), (80,35), 0, 0, 180, background_color, -1) # u
    cv.ellipse(background, (1200,340), (80,35), 0, 0, 180, background_color, -1) # u

    cv.imshow('EMORA', background)
    cv.waitKey(600)

    background = np.zeros((1080,1920,3), dtype= np.uint8)

    cv.line(background, (860,640), (1060,640), theme_color, 10) # -
    cv.ellipse(background, (720,360), (90,25), 0, 0, 180, theme_color, -1) # U
    cv.ellipse(background, (1200,360), (90,25), 0, 0, 190, theme_color, -1) # U
    cv.ellipse(background, (720,360), (90,25), 0, 0, -10, theme_color, -1) # U
    cv.ellipse(background, (720,335), (80,35), 0, 0, 180, background_color, -1) # u
    cv.ellipse(background, (1200,335), (80,35), 0, 0, 180, background_color, -1) # u

    cv.imshow('EMORA', background)
    cv.waitKey(300)

    background = np.zeros((1080,1920,3), dtype= np.uint8)

    cv.line(background, (860,640), (1060,640), theme_color, 10) # -
    cv.ellipse(background, (720,360), (90,25), 0, 0, 180, theme_color, -1) # U
    cv.ellipse(background, (1200,360), (90,25), 0, 0, 200, theme_color, -1) # U
    cv.ellipse(background, (720,360), (90,25), 0, 0, -20, theme_color, -1) # U
    cv.ellipse(background, (720,330), (80,35), 0, 0, 180, background_color, -1) # u
    cv.ellipse(background, (1200,330), (80,35), 0, 0, 180, background_color, -1) # u

    cv.imshow('EMORA', background)
    cv.waitKey(300)

    background = np.zeros((1080,1920,3), dtype= np.uint8)

    cv.line(background, (860,640), (1060,640), theme_color, 10) # -
    cv.ellipse(background, (720,360), (90,25), 0, 0, 180, theme_color, -1) # U
    cv.ellipse(background, (1200,360), (90,25), 0, 0, 210, theme_color, -1) # U
    cv.ellipse(background, (720,360), (90,25), 0, 0, -30, theme_color, -1) # U
    cv.ellipse(background, (720,325), (80,35), 0, 0, 180, background_color, -1) # u
    cv.ellipse(background, (1200,325), (80,35), 0, 0, 180, background_color, -1) # u

    cv.imshow('EMORA', background)
    cv.waitKey(300)

    background = np.zeros((1080,1920,3), dtype= np.uint8)

    cv.line(background, (860,640), (1060,640), theme_color, 10) # -
    cv.ellipse(background, (720,360), (90,25), 0, 0, 180, theme_color, -1) # U
    cv.ellipse(background, (1200,360), (90,25), 0, 0, 200, theme_color, -1) # U
    cv.ellipse(background, (720,360), (90,25), 0, 0, -20, theme_color, -1) # U
    cv.ellipse(background, (720,330), (80,35), 0, 0, 180, background_color, -1) # u
    cv.ellipse(background, (1200,330), (80,35), 0, 0, 180, background_color, -1) # u

    cv.imshow('EMORA', background)
    cv.waitKey(300)

    background = np.zeros((1080,1920,3), dtype= np.uint8)

    cv.line(background, (860,640), (1060,640), theme_color, 10) # -
    cv.ellipse(background, (720,360), (90,25), 0, 0, 180, theme_color, -1) # U
    cv.ellipse(background, (1200,360), (90,25), 0, 0, 190, theme_color, -1) # U
    cv.ellipse(background, (720,360), (90,25), 0, 0, -10, theme_color, -1) # U
    cv.ellipse(background, (720,335), (80,35), 0, 0, 180, background_color, -1) # u
    cv.ellipse(background, (1200,335), (80,35), 0, 0, 180, background_color, -1) # u

    cv.imshow('EMORA', background)
    cv.waitKey(300)

def greeting():
    background = np.zeros((1080,1920,3), dtype= np.uint8)
    dateTime = dt.datetime.now()
    strDateTime = (dateTime.strftime("%d-%m-%Y   %H:%M"))
    cv.putText(background, robot_name, (32,1060), cv.FONT_HERSHEY_DUPLEX, 1, theme_color, 1)
    cv.putText(background, strDateTime, (1532,1060), cv.FONT_HERSHEY_DUPLEX, 1, theme_color, 1)
    
    text = "Hi! Isuru"
    text_len = len(list(text))*18
    cv.circle(background, (720,360), 90, theme_color, 20) # o
    cv.line(background, (1110,360), (1290,360), theme_color, 10) # -
    cv.ellipse(background, (960,640), (100,80), 0, 0, 180, theme_color, 16) # u
    cv.putText(background, text, (960-text_len,900), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 1)
    cv.imshow('EMORA', background)
    cv.waitKey(1000)

def neutral_mood():
    cv.circle(background, (720,360), 90, theme_color, 20) # o
    cv.circle(background, (1200,360), 90, theme_color, 20) # o
    cv.ellipse(background, (960,640), (100,40), 0, 0, 180, theme_color, 16) # u

def happy_mood():
    cv.line(background, (600,420), (720,240), theme_color, 10) # ^
    cv.line(background, (720,240), (840,420), theme_color, 10)
    cv.line(background, (1080,420), (1200,240), theme_color, 10) # v
    cv.line(background, (1200,240), (1320,420), theme_color, 10)
    cv.ellipse(background, (960,640), (160,120), 0, 0, 180, theme_color, 16) # u

def bad_mood():
    cv.line(background, (600,240), (800,330), theme_color, 10) # >
    cv.line(background, (600,420), (800,330), theme_color, 10)
    cv.line(background, (1320,240), (1120,330), theme_color, 10) # <
    cv.line(background, (1320,420), (1120,330), theme_color, 10)
    cv.ellipse(background, (960,720), (160,100), 180, 0, 180, theme_color, 16) # u

def surprise_mood():
    cv.ellipse(background, (740,180), (100,25), 0, 0, 360, theme_color, -1) # U
    cv.ellipse(background, (1180,180), (100,25), 0, 0, 360, theme_color, -1) # U
    cv.ellipse(background, (720,200), (80,35), 0, 0, 360, background_color, -1) # u
    cv.ellipse(background, (1200,200), (80,35), 0, 0, 360, background_color, -1) # u
    cv.circle(background, (720,360), 100, theme_color, 20) # o
    cv.circle(background, (1200,360), 100, theme_color, 20) # o
    cv.ellipse(background, (960,680), (100,75), 0, 0, 360, theme_color, 10) # u

#identify person
identity = False

#create cascade classifier instance
face_cascade = cv.CascadeClassifier('haarcascade_frontalface_default.xml')

#create emotion classifier instance
emo = FER()

#setting face to not found at the start
face_flag = False

known_image = face_recognition.load_image_file("isuru.jpg")

encoded_known = face_recognition.face_encodings(known_image)[0]

#set input video stream
video_capture = cv.VideoCapture(-1)

if not video_capture.isOpened():
  print("Camera not found")
  raise IOError("Cannot open webcam")

#face recognition
isuru_image = face_recognition.load_image_file("isuru.jpg")
isuru_face_encoding = face_recognition.face_encodings(isuru_image)[0]
known_face_encodings = [isuru_face_encoding]
known_face_names = ["isuru"]
face_locations = []
face_encodings = []
face_names = []
person = "Unknown"

#method to extract faces
def face_extractor(img, fs):

    cropped_face = None
    face_x = None

    faces = face_cascade.detectMultiScale(img, 1.3, 5)

    if len(faces) == 0:
        return None, None, 0

    for (x,y,w,h) in faces:
        cv.rectangle(img,(x,y),(x+w,y+h),(0,255,255),2)
        cropped_face = img[y:y+h, x:x+w]
        face_x = x+int(w/2)
        error_x = face_x - fs
        print(face_x)

    return cropped_face, face_x, error_x

'''
    Driver code ----------------------------------------------------------------------------------------------
    ----------------------------------------------------------------------------------------------------------
'''

print("Driver Code!!!")
#infinite while loop
while True:

    # servo.angle = 30

    #background for interfaces
    background = np.zeros((1080,1920,3), dtype= np.uint8)
    #pos = pyautogui.position()
    
    #current data and time
    dateTime = dt.datetime.now()
    strDateTime = (dateTime.strftime("%d-%m-%Y   %H:%M"))

    #display robot name and current date and time
    cv.putText(background, robot_name, (32,1060), cv.FONT_HERSHEY_DUPLEX, 1, theme_color, 1)
    cv.putText(background, strDateTime, (1532,1060), cv.FONT_HERSHEY_DUPLEX, 1, theme_color, 1)

    #print("frame get")
    _, frame = video_capture.read()
    frame_shape = frame.shape[1]
    #print(frame_shape)
    #print("frame got")
    #gray = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)

    face, face_x, error_x = face_extractor(frame, int(frame_shape/2))

    #check for a face
    if type(face) is np.ndarray:
        
        print("Face found!!!")

        #face tracking : only for Raspberry Pi
        # new_angle = 0 + error_x + 0.1
        # if(new_angle> -90 and new_angle < 90):
        #     servo.angle = new_angle
        #     prev_angle = new_angle
        # else: 
        #     servo.angle = prev_angle

        # time.sleep(0.5)

        #check for recognition
        rgb_frame = np.ascontiguousarray(frame[:, :, ::-1])
        face_locations = face_recognition.face_locations(rgb_frame)
        face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)
        face_names = []

        #find a matching face
        for face_encoding in face_encodings:
            matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
            person = "Unknown"
            if True in matches:
                first_match_index = matches.index(True)
                person = known_face_names[first_match_index]
    
        print("Detected person: ", person)

        #if it is the correct person
        if(person == "isuru"):

            print("Detected Isuru!!!")

            #default mood: neutral
            emotion_id = 5

            if(identity == False):
                greeting()
                play_audio('hi')
                identity = True

            else:

                #check for responses
                arrived = json.loads(get_data())
                if(arrived["responseExists"] == 1):
                    if(arrived["type"] == 'VOICE'):
                        #music()
                        play_audio(arrived["content"])
                        print("voice")
                    elif(arrived["type"] == 'VIDEO'):
                        play_video(arrived["content"])
                        print("video")
                    elif(arrived["type"] == 'PHOTO'):
                        display_image(arrived["content"])
                        print("photo")
                    elif(arrived["type"] == 'TEXT'):
                        #display_image(arrived["output"])
                        print("text")
                    elif(arrived["type"] == 'REMINDER'):
                        reminder(arrived["content"])
                        print("reminder")
                else:
                    print("no")

                #detect the emotion
                emotion_name, score = emo.top_emotion(face)

                if(emotion_name != None):
                    #print("Detected emotion: ", emotion_name)
                    emotion_id = emotion_dic[emotion_name]             

                    if(emotion_id == 7):
                        happy_mood()
                    elif(emotion_id == 6):
                        surprise_mood()
                    elif(emotion_id == 1 or emotion_id == 2 or emotion_id == 3 or emotion_id == 4):
                        bad_mood()     
                    else:
                        neutral_mood()

                else:
                    neutral_mood()

                #send emotion to the dashboard
                post_data(emotion_id)
                time.sleep(3)
        
        else:
            if(identity == True):
                play_audio('bye')
                print("Bye")
            identity = False
            sleeping()
    
    else:
        if(identity == True):
            play_audio('bye')
            print("Bye")
        identity = False
        #print("Face found: False")
        sleeping()

    #display the relevant interface
    cv.imshow('EMORA', background)

    if cv.waitKey(1) & 0xFF == ord('q'):
        break

#release input video stream
video_capture.release()

#close all opened opencv windows
cv.destroyAllWindows()