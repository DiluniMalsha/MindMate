import cv2 as cv
import time
from fer import FER

cap = cv.VideoCapture(0)

if not cap.isOpened():
  raise IOError("Cannot open webcam")

emo = FER()

while(True):

  ret, img = cap.read()

  # result = emo.detect_emotions(img)

  # bounding_box = result[0]["box"]
  # emotions = result[0]["emotions"]
  # cv.rectangle(img, (
  #   bounding_box[0], bounding_box[1]),(
  #   bounding_box[0] + bounding_box[2], bounding_box[1] + bounding_box[3]),
  #               (0, 155, 255), 2,)

  emotion_name, score = emo.top_emotion(img)
  print("Top emotion: ", emotion_name)
  
  #cv.imshow('Result', img)
  
  if(cv.waitKey(0) & 0xFF == ord('q')):
    break

cap.release()
cv.destroyAllWindows()