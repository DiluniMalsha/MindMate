#import required libraries 
import cv2 as cv
import numpy as np
import datetime as dt
import pyautogui
import time
import random

#interface defaults
background = None
theme_color = (200,190,20)
background_color = (0,0,0)
robot_name = "EMORA"

#tic-tac-toe
like_to_play = False
game_running = True

#set interfaces to fullscreen
cv.namedWindow("EMORA", cv.WND_PROP_FULLSCREEN)
cv.setWindowProperty("EMORA",cv.WND_PROP_FULLSCREEN,cv.WINDOW_FULLSCREEN)

#interfaces

def ask_to_play():
    #set cursor
    pyautogui.moveTo(20, 20)
    ask_to_play_timer = 5
    global like_to_play
    game_name_text = "Tic-Tac-Toe"
    game_name_text_len = len(list(game_name_text))*36
    ask_to_play_text = "Play"
    ask_to_play_text_len = len(list(ask_to_play_text))*24
    
    while(ask_to_play_timer>0):
        #background
        background = np.zeros((1080,1920,3), dtype= np.uint8)
        #game name
        cv.putText(background, game_name_text, (960-game_name_text_len,300), cv.FONT_HERSHEY_DUPLEX, 4, theme_color, 4)
        #play button
        cv.ellipse(background, (825,500), (25,25), 180, 0, 90, theme_color, 7) # '
        cv.ellipse(background, (1095,500), (25,25), 270, 0, 90, theme_color, 7) #  '
        cv.ellipse(background, (825,640), (25,25), 90, 0, 90, theme_color, 7) # .
        cv.ellipse(background, (1095,640), (25,25), 0, 0, 90, theme_color, 7) #  .
        cv.line(background, (825,475), (1095,475), theme_color, 7) # -
        cv.line(background, (825,665), (1095,665), theme_color, 7) # _
        cv.line(background, (800,500), (800,640), theme_color, 7) # |
        cv.line(background, (1120,500), (1120,640), theme_color, 7) #  |
        cv.putText(background, ask_to_play_text, (960-ask_to_play_text_len,600), cv.FONT_HERSHEY_DUPLEX, 3, theme_color, 4)
        #invitation timer
        invitation_text = f"Invitation closing in {ask_to_play_timer} seconds!"
        invitation_text_len = len(list(invitation_text))*24
        cv.putText(background, invitation_text, (960-invitation_text_len,900), cv.FONT_HERSHEY_DUPLEX, 3, theme_color, 4)
        ask_to_play_timer -= 1

        cv.imshow('EMORA', background)

        if cv.waitKey(1) & 0xFF == ord('q'):
            break

        if((pyautogui.position()[0] > 800 and pyautogui.position()[0] < 1120) and (pyautogui.position()[1] > 400 and pyautogui.position()[1] < 600)):
            like_to_play = True
            break

        time.sleep(0.75)

def tic_tac_toe():

    ttt_result = None
    ttt_squares = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ttt_occupied = []
    ttt_crosses = []
    ttt_noughts = []
    ttt_winning_patterns = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
    ttt_wp_idx = None
    ttt_wp_line = [[540,260,1380,260], [540,540,1380,540], [540,820,1380,820], [680,120,680,960], [960,120,960,960], [1240,120,1240,960], [540,120,1380,960], [1380,120,540,960]]

    global game_running

    ttt_win_user_text = "You won!"
    ttt_win_user_text_len = len(list(ttt_win_user_text))*18
    ttt_win_emora_text = "Emora won!"
    ttt_win_emora_text_len = len(list(ttt_win_emora_text))*18
    ttt_win_emora_timeover_text = "Time over. Emora won!"
    ttt_win_emora_timeover_text_len = len(list(ttt_win_emora_timeover_text))*18
    ttt_draw_text = "Match drawn!"
    ttt_draw_text_len = len(list(ttt_draw_text))*18

    ttt_turn_user = True

    ttt_turn_user_text = "Your turn"
    ttt_turn_user_text_len = len(list(ttt_turn_user_text))*18
    ttt_turn_emora_text = "Emora's turn"
    ttt_turn_emora_text_len = len(list(ttt_turn_emora_text))*18



    while(game_running):

        # user's turn
        
        if(ttt_turn_user):
            turn_timer = 9
            #set cursor
            pyautogui.moveTo(20, 20)
            while(turn_timer>0):
                
                ttt_chosen_square = 0

                background = np.zeros((1080,1920,3), dtype= np.uint8)
                cv.line(background, (820,120), (820,960), theme_color, 3) # |
                cv.line(background, (1100,120), (1100,960), theme_color, 3) #  |
                cv.line(background, (540,400), (1380,400), theme_color, 3) # -
                cv.line(background, (540,680), (1380,680), theme_color, 3) # _
                cv.putText(background, "You: x", (160,540), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)
                cv.putText(background, "Emora: o", (1520,540), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)

                for cross in ttt_crosses:
                    if cross == 1:
                        cp1 = 580
                        cp2 = 160
                        cp3 = 780
                        cp4 = 360
                        cp5 = 780
                        cp6 = 160
                        cp7 = 580
                        cp8 = 360
                    elif cross == 2:
                        cp1 = 860
                        cp2 = 160
                        cp3 = 1060
                        cp4 = 360
                        cp5 = 1060
                        cp6 = 160
                        cp7 = 860
                        cp8 = 360
                    elif cross == 3:
                        cp1 = 1140
                        cp2 = 160
                        cp3 = 1340
                        cp4 = 360
                        cp5 = 1340
                        cp6 = 160
                        cp7 = 1140
                        cp8 = 360 
                    elif cross == 4:
                        cp1 = 580
                        cp2 = 440
                        cp3 = 780
                        cp4 = 640
                        cp5 = 780
                        cp6 = 440
                        cp7 = 580
                        cp8 = 640
                    elif cross == 5:
                        cp1 = 860
                        cp2 = 440
                        cp3 = 1060
                        cp4 = 640
                        cp5 = 1060
                        cp6 = 440
                        cp7 = 860
                        cp8 = 640
                    elif cross == 6:
                        cp1 = 1140
                        cp2 = 440
                        cp3 = 1340
                        cp4 = 640
                        cp5 = 1340
                        cp6 = 440
                        cp7 = 1140
                        cp8 = 640 
                    elif cross == 7:
                        cp1 = 580
                        cp2 = 720
                        cp3 = 780
                        cp4 = 920
                        cp5 = 780
                        cp6 = 720
                        cp7 = 580
                        cp8 = 920
                    elif cross == 8:
                        cp1 = 860
                        cp2 = 720
                        cp3 = 1060
                        cp4 = 920
                        cp5 = 1060
                        cp6 = 720
                        cp7 = 860
                        cp8 = 920
                    elif cross == 9:
                        cp1 = 1140
                        cp2 = 720
                        cp3 = 1340
                        cp4 = 920
                        cp5 = 1340
                        cp6 = 720
                        cp7 = 1140
                        cp8 = 920             

                    cv.line(background, (cp1,cp2), (cp3,cp4), theme_color, 5) 
                    cv.line(background, (cp5,cp6), (cp7,cp8), theme_color, 5)
                
                for nought in ttt_noughts:
                    if nought == 1:
                        np1 = 680
                        np2 = 260 
                    elif nought == 2:
                        np1 = 960
                        np2 = 260
                    elif nought == 3:
                        np1 = 1240
                        np2 = 260
                    elif nought == 4:
                        np1 = 680
                        np2 = 540 
                    elif nought == 5:
                        np1 = 960
                        np2 = 540
                    elif nought == 6:
                        np1 = 1240
                        np2 = 540
                    elif nought == 7:
                        np1 = 680
                        np2 = 820 
                    elif nought == 8:
                        np1 = 960
                        np2 = 820
                    elif nought == 9:
                        np1 = 1240
                        np2 = 820      

                    cv.circle(background, (np1,np2), 100, theme_color, 5)

                cv.putText(background, ttt_turn_user_text, (960-ttt_turn_user_text_len,1060), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)
                #user timer
                turn_timer_text = f"{turn_timer} seconds"
                cv.putText(background, turn_timer_text, (80,600), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)
                turn_timer -= 1

                cv.imshow('EMORA', background)

                if cv.waitKey(1) & 0xFF == ord('q'):
                    break

                if((pyautogui.position()[0] > 540 and pyautogui.position()[0] < 820) and (pyautogui.position()[1] > 120 and pyautogui.position()[1] < 400)):
                    ttt_chosen_square = 1
                elif((pyautogui.position()[0] > 820 and pyautogui.position()[0] < 1100) and (pyautogui.position()[1] > 120 and pyautogui.position()[1] < 400)):
                    ttt_chosen_square = 2
                elif((pyautogui.position()[0] > 1100 and pyautogui.position()[0] < 1380) and (pyautogui.position()[1] > 120 and pyautogui.position()[1] < 400)):
                    ttt_chosen_square = 3
                elif((pyautogui.position()[0] > 540 and pyautogui.position()[0] < 820) and (pyautogui.position()[1] > 400 and pyautogui.position()[1] < 680)):
                    ttt_chosen_square = 4
                elif((pyautogui.position()[0] > 820 and pyautogui.position()[0] < 1100) and (pyautogui.position()[1] > 400 and pyautogui.position()[1] < 680)):
                    ttt_chosen_square = 5
                elif((pyautogui.position()[0] > 1100 and pyautogui.position()[0] < 1380) and (pyautogui.position()[1] > 400 and pyautogui.position()[1] < 680)):
                    ttt_chosen_square = 6
                elif((pyautogui.position()[0] > 540 and pyautogui.position()[0] < 820) and (pyautogui.position()[1] > 680 and pyautogui.position()[1] < 960)):
                    ttt_chosen_square = 7
                elif((pyautogui.position()[0] > 820 and pyautogui.position()[0] < 1100) and (pyautogui.position()[1] > 680 and pyautogui.position()[1] < 960)):
                    ttt_chosen_square = 8
                elif((pyautogui.position()[0] > 1100 and pyautogui.position()[0] < 1380) and (pyautogui.position()[1] > 680 and pyautogui.position()[1] < 960)):
                    ttt_chosen_square = 9
                
                if(ttt_chosen_square in ttt_squares):
                    ttt_turn_user = False
                    ttt_occupied.append(ttt_chosen_square)
                    ttt_crosses.append(ttt_chosen_square)
                    ttt_squares.remove(ttt_chosen_square)
                    break

                time.sleep(0.8)

        # emora's turn

        else:
            time.sleep(0.8)  

            background = np.zeros((1080,1920,3), dtype= np.uint8)
            cv.line(background, (820,120), (820,960), theme_color, 3) # |
            cv.line(background, (1100,120), (1100,960), theme_color, 3) #  |
            cv.line(background, (540,400), (1380,400), theme_color, 3) # -
            cv.line(background, (540,680), (1380,680), theme_color, 3) # _
            cv.putText(background, "You: x", (160,540), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)
            cv.putText(background, "Emora: o", (1520,540), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)

            for cross in ttt_crosses:
                if cross == 1:
                    cp1 = 580
                    cp2 = 160
                    cp3 = 780
                    cp4 = 360
                    cp5 = 780
                    cp6 = 160
                    cp7 = 580
                    cp8 = 360
                elif cross == 2:
                    cp1 = 860
                    cp2 = 160
                    cp3 = 1060
                    cp4 = 360
                    cp5 = 1060
                    cp6 = 160
                    cp7 = 860
                    cp8 = 360
                elif cross == 3:
                    cp1 = 1140
                    cp2 = 160
                    cp3 = 1340
                    cp4 = 360
                    cp5 = 1340
                    cp6 = 160
                    cp7 = 1140
                    cp8 = 360 
                elif cross == 4:
                    cp1 = 580
                    cp2 = 440
                    cp3 = 780
                    cp4 = 640
                    cp5 = 780
                    cp6 = 440
                    cp7 = 580
                    cp8 = 640
                elif cross == 5:
                    cp1 = 860
                    cp2 = 440
                    cp3 = 1060
                    cp4 = 640
                    cp5 = 1060
                    cp6 = 440
                    cp7 = 860
                    cp8 = 640
                elif cross == 6:
                    cp1 = 1140
                    cp2 = 440
                    cp3 = 1340
                    cp4 = 640
                    cp5 = 1340
                    cp6 = 440
                    cp7 = 1140
                    cp8 = 640 
                elif cross == 7:
                    cp1 = 580
                    cp2 = 720
                    cp3 = 780
                    cp4 = 920
                    cp5 = 780
                    cp6 = 720
                    cp7 = 580
                    cp8 = 920
                elif cross == 8:
                    cp1 = 860
                    cp2 = 720
                    cp3 = 1060
                    cp4 = 920
                    cp5 = 1060
                    cp6 = 720
                    cp7 = 860
                    cp8 = 920
                elif cross == 9:
                    cp1 = 1140
                    cp2 = 720
                    cp3 = 1340
                    cp4 = 920
                    cp5 = 1340
                    cp6 = 720
                    cp7 = 1140
                    cp8 = 920              

                cv.line(background, (cp1,cp2), (cp3,cp4), theme_color, 5) 
                cv.line(background, (cp5,cp6), (cp7,cp8), theme_color, 5)
            
            for nought in ttt_noughts:
                if nought == 1:
                    np1 = 680
                    np2 = 260 
                elif nought == 2:
                    np1 = 960
                    np2 = 260
                elif nought == 3:
                    np1 = 1240
                    np2 = 260
                elif nought == 4:
                    np1 = 680
                    np2 = 540 
                elif nought == 5:
                    np1 = 960
                    np2 = 540
                elif nought == 6:
                    np1 = 1240
                    np2 = 540
                elif nought == 7:
                    np1 = 680
                    np2 = 820 
                elif nought == 8:
                    np1 = 960
                    np2 = 820
                elif nought == 9:
                    np1 = 1240
                    np2 = 820      

                cv.circle(background, (np1,np2), 100, theme_color, 5)

            cv.putText(background, ttt_turn_emora_text, (960-ttt_turn_emora_text_len,1060), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)

            cv.imshow('EMORA', background)

            if cv.waitKey(1) & 0xFF == ord('q'):
                break

            ttt_turn_user = True
            ttt_chosen_square = ttt_squares[random.randint(0,len(ttt_squares)-1)]
            ttt_occupied.append(ttt_chosen_square)
            ttt_noughts.append(ttt_chosen_square)
            ttt_squares.remove(ttt_chosen_square)

            time.sleep(0.8)   

        if(ttt_chosen_square == 0):
            ttt_result = 3    
        
        for wp in ttt_winning_patterns:
            if(all(wps in ttt_crosses for wps in wp)):
                ttt_result = 1 # user won
                ttt_wp_idx = ttt_winning_patterns.index(wp)
                break
            elif(all(wps in ttt_noughts for wps in wp)):
                ttt_result = 2 # emora won
                ttt_wp_idx = ttt_winning_patterns.index(wp)
                break
        
        if(ttt_result == 1 or ttt_result == 2 or ttt_result == 3):
            game_running = False
            break

        if(len(ttt_squares) == 0):
            ttt_result = 0 # drawn
            game_running = False
            break

    # match result

    background = np.zeros((1080,1920,3), dtype= np.uint8)
    cv.line(background, (820,120), (820,960), theme_color, 3) # |
    cv.line(background, (1100,120), (1100,960), theme_color, 3) #  |
    cv.line(background, (540,400), (1380,400), theme_color, 3) # -
    cv.line(background, (540,680), (1380,680), theme_color, 3) # _
    cv.putText(background, "You: x", (160,540), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)
    cv.putText(background, "Emora: o", (1520,540), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)

    for cross in ttt_crosses:
        if cross == 1:
            cp1 = 580
            cp2 = 160
            cp3 = 780
            cp4 = 360
            cp5 = 780
            cp6 = 160
            cp7 = 580
            cp8 = 360
        elif cross == 2:
            cp1 = 860
            cp2 = 160
            cp3 = 1060
            cp4 = 360
            cp5 = 1060
            cp6 = 160
            cp7 = 860
            cp8 = 360
        elif cross == 3:
            cp1 = 1140
            cp2 = 160
            cp3 = 1340
            cp4 = 360
            cp5 = 1340
            cp6 = 160
            cp7 = 1140
            cp8 = 360 
        elif cross == 4:
            cp1 = 580
            cp2 = 440
            cp3 = 780
            cp4 = 640
            cp5 = 780
            cp6 = 440
            cp7 = 580
            cp8 = 640
        elif cross == 5:
            cp1 = 860
            cp2 = 440
            cp3 = 1060
            cp4 = 640
            cp5 = 1060
            cp6 = 440
            cp7 = 860
            cp8 = 640
        elif cross == 6:
            cp1 = 1140
            cp2 = 440
            cp3 = 1340
            cp4 = 640
            cp5 = 1340
            cp6 = 440
            cp7 = 1140
            cp8 = 640 
        elif cross == 7:
            cp1 = 580
            cp2 = 720
            cp3 = 780
            cp4 = 920
            cp5 = 780
            cp6 = 720
            cp7 = 580
            cp8 = 920
        elif cross == 8:
            cp1 = 860
            cp2 = 720
            cp3 = 1060
            cp4 = 920
            cp5 = 1060
            cp6 = 720
            cp7 = 860
            cp8 = 920
        elif cross == 9:
            cp1 = 1140
            cp2 = 720
            cp3 = 1340
            cp4 = 920
            cp5 = 1340
            cp6 = 720
            cp7 = 1140
            cp8 = 920              

        cv.line(background, (cp1,cp2), (cp3,cp4), theme_color, 5) 
        cv.line(background, (cp5,cp6), (cp7,cp8), theme_color, 5)
    
    for nought in ttt_noughts:
        if nought == 1:
            np1 = 680
            np2 = 260 
        elif nought == 2:
            np1 = 960
            np2 = 260
        elif nought == 3:
            np1 = 1240
            np2 = 260
        elif nought == 4:
            np1 = 680
            np2 = 540 
        elif nought == 5:
            np1 = 960
            np2 = 540
        elif nought == 6:
            np1 = 1240
            np2 = 540
        elif nought == 7:
            np1 = 680
            np2 = 820 
        elif nought == 8:
            np1 = 960
            np2 = 820
        elif nought == 9:
            np1 = 1240
            np2 = 820      

        cv.circle(background, (np1,np2), 100, theme_color, 5)
    
    if(ttt_result == 0):
        cv.putText(background, ttt_draw_text, (960-ttt_draw_text_len,1060), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)
    elif(ttt_result == 3):
        cv.putText(background, ttt_win_emora_timeover_text, (960-ttt_win_emora_timeover_text_len,1060), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)
    else:
        wplc = ttt_wp_line[ttt_wp_idx]
        cv.line(background, (wplc[0],wplc[1]), (wplc[2],wplc[3]), theme_color, 2)
        if(ttt_result == 1):
            cv.putText(background, ttt_win_user_text, (960-ttt_win_user_text_len,1060), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)
        else:
            cv.putText(background, ttt_win_emora_text, (960-ttt_win_emora_text_len,1060), cv.FONT_HERSHEY_DUPLEX, 2, theme_color, 4)
    
    cv.imshow('EMORA', background)           
    cv.waitKey(5000)
        

'''
    Driver code -----------------------------------------------------
'''

#infinite while loop
while True:

    #background for interfaces
    background = np.zeros((1080,1920,3), dtype= np.uint8)
    #pos = pyautogui.position()
    
    #current data and time
    dateTime = dt.datetime.now()
    strDateTime = (dateTime.strftime("%d-%m-%Y   %H:%M"))

    #display robot name and current date and time
    cv.putText(background, robot_name, (32,1060), cv.FONT_HERSHEY_DUPLEX, 1, theme_color, 1)
    cv.putText(background, strDateTime, (1532,1060), cv.FONT_HERSHEY_DUPLEX, 1, theme_color, 1)

    #display the relevant interface
    # cv.imshow('EMORA', background)

    if cv.waitKey(1) & 0xFF == ord('q'):
         break

    #tic-tac-toe
    like_to_play = False
    game_running = True

    ask_to_play()
    if(like_to_play):
        tic_tac_toe()

#close all opened opencv windows
cv.destroyAllWindows()