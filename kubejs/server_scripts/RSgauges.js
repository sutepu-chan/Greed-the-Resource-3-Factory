onEvent('recipes', e => {
    let rscutting = (materials) => {
        materials.forEach(m => {
            materials.forEach(n => {
                e.stonecutting(n, m)
            })
        })
    }
    rscutting([
        'rsgauges:industrial_small_lever',
        'rsgauges:industrial_lever',
        'rsgauges:industrial_rotary_lever',
        'rsgauges:industrial_rotary_machine_switch',
        'rsgauges:industrial_machine_switch',
        'rsgauges:industrial_estop_switch',
        'rsgauges:industrial_hopper_switch'
    ])
    rscutting([
        'rsgauges:industrial_button',
        'rsgauges:industrial_fenced_button',
        'rsgauges:industrial_double_pole_button',
        'rsgauges:industrial_foot_button',
        'rsgauges:industrial_pull_handle'
    ])
    rscutting([
        'rsgauges:industrial_door_contact_mat',
        'rsgauges:industrial_contact_mat',
        'rsgauges:industrial_shock_sensitive_contact_mat'
    ])
    rscutting([
        'rsgauges:industrial_shock_sensitive_trapdoor',
        'rsgauges:industrial_high_sensitive_trapdoor'
    ])
    rscutting([
        'rsgauges:industrial_day_timer',
        'rsgauges:industrial_interval_timer'
    ])
    rscutting([
        'rsgauges:industrial_entity_detector',
        'rsgauges:industrial_linear_entity_detector'
    ])
    rscutting([
        'rsgauges:industrial_light_sensor',
        'rsgauges:industrial_rain_sensor',
        'rsgauges:industrial_lightning_sensor'
    ])
    rscutting([
        'rsgauges:industrial_analog_angular_gauge',
        'rsgauges:industrial_vertical_bar_gauge',
        'rsgauges:industrial_small_digital_gauge',
        'rsgauges:industrial_tube_gauge',
        'rsgauges:industrial_analog_horizontal_gauge'
    ])
    rscutting([
        'rsgauges:industrial_green_led',
        'rsgauges:industrial_green_blinking_led',
        'rsgauges:industrial_yellow_led',
        'rsgauges:industrial_yellow_blinking_led',
        'rsgauges:industrial_red_led',
        'rsgauges:industrial_red_blinking_led',
        'rsgauges:industrial_white_led',
        'rsgauges:industrial_white_blinking_led'
    ])
    rscutting([
        'rsgauges:rustic_lever',
        'rsgauges:rustic_two_hinge_lever',
        'rsgauges:rustic_angular_lever',
        'rsgauges:rustic_nail_lever'
    ])
    rscutting([
        'rsgauges:rustic_button',
        'rsgauges:rustic_small_button',
        'rsgauges:rustic_spring_reset_chain',
        'rsgauges:rustic_nail_button'
    ])
    rscutting([
        'rsgauges:rustic_door_contact_plate',
        'rsgauges:rustic_contact_plate',
        'rsgauges:rustic_shock_sensitive_plate'
    ])
    rscutting([
        'rsgauges:rustic_door_contact_plate',
        'rsgauges:rustic_contact_plate',
        'rsgauges:rustic_shock_sensitive_plate'
    ])
    rscutting([
        'rsgauges:glass_rotary_switch',
        'rsgauges:glass_touch_switch'
    ])
    rscutting([
        'rsgauges:glass_button',
        'rsgauges:glass_small_button',
        'rsgauges:glass_touch_button'
    ])
    rscutting([
        'rsgauges:glass_door_contact_mat',
        'rsgauges:glass_contact_mat'
    ])
    rscutting([
        'rsgauges:oldfancy_bistableswitch1',
        'rsgauges:oldfancy_bistableswitch2'
    ])
    rscutting([
        'rsgauges:oldfancy_button',
        'rsgauges:oldfancy_spring_reset_chain',
        'rsgauges:oldfancy_small_button'
    ])
})