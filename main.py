def on_button_pressed_a():
    led.plot_brightness(2, 2, randint(0, 250))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if led.point_brightness(2, 2) * (100 / 250) < 25:
        basic.show_number(led.point_brightness(0, 0) * (100 / 250))
        basic.show_string("%")
        basic.clear_screen()
    elif led.point_brightness(2, 2) * (100 / 250) <= 50:
        basic.show_number(led.point_brightness(2, 2) * (100 / 250))
        basic.show_string("%")
        basic.clear_screen()
    elif led.point_brightness(2, 2) * (100 / 250) <= 75:
        basic.show_number(led.point_brightness(2, 2) * (100 / 250))
        basic.show_string("%")
        basic.clear_screen()
    else:
        basic.show_number(led.point_brightness(2, 2) * (100 / 250))
        basic.show_string("%")
        basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)
