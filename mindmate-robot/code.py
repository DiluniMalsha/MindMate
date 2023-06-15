import cv2 as cv
import numpy as np
import datetime as dt

#interface defaults
# y = height, x = width
background = None
theme_color = (200,190,20)
background_color = (0,0,0)
robot_name = "MINDMATE"

cv.namedWindow("MINDMATE", cv.WND_PROP_FULLSCREEN)
cv.setWindowProperty("MINDMATE",cv.WND_PROP_FULLSCREEN,cv.WINDOW_FULLSCREEN)

def moodIsFine():
    # x = width, y = height
    #cv.circle(background, (800,432), 300, theme_color, 2)
    cv.circle(background, (660,322), 50, theme_color, 6)
    cv.line(background, (607,322), (713,322), background_color, 12)
    cv.circle(background, (940,322), 50, theme_color, 6)
    cv.line(background, (887,322), (993,322), background_color, 12)
    cv.line(background, (750,460), (850,460), theme_color, 6)
    #cv.ellipse(background, (800,420), (50,36), 0, 0, 180, theme_color, 6)



while(True):
    
    background = np.zeros((864,1600,3), dtype= np.uint8)
    dateTime = dt.datetime.now()
    strDateTime = (dateTime.strftime("%d-%m-%Y %H:%M:%S"))
    cv.putText(background, robot_name, (14,840), cv.FONT_HERSHEY_DUPLEX, 1, theme_color, 1)
    cv.putText(background, strDateTime, (1212,840), cv.FONT_HERSHEY_DUPLEX, 1, theme_color, 1)

    #if mood is fine
    moodIsFine()
    
    cv.imshow('MINDMATE', background)
    key = cv.waitKey(1)
    
    if(0xFF == ord('q')):
        break

cv.destroyAllWindows()