<?php if( ! defined( 'ABSPATH' ) ) exit;

function the_score_back_to_top_customize_register( $wp_customize ) {
	
/***********************************************************************************
 * Back to top button Options
***********************************************************************************/
 
		$wp_customize->add_section( 'back_to_top' , array(
			'title'       => __( 'Back To Top Button Options', 'the-score' ),
			'priority'   => 98,
		) );
		
		$wp_customize->add_setting( 'activate_back_to_top', array (
			'default'     => true,
			'sanitize_callback' => 'the_score_sanitize_checkbox',
		) );
		
		
		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'activate_back_to_top', array(
			'label'    => __( 'Activate Back To Top Button', 'the-score' ),
			'section'  => 'back_to_top',
			'settings' => 'activate_back_to_top',
			'type' => 'checkbox',
		) ) );
		
		$wp_customize->add_setting( 'aback_to_top_speed', array (
			'sanitize_callback' => 'sanitize_text_field',
		) );
		
		
		$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'aback_to_top_speed', array(
			'label'    => __( 'Button Speed', 'the-score' ),
			'section'  => 'back_to_top',
			'settings' => 'aback_to_top_speed',
			'type' => 'range',
			'input_attrs'     => array(
				'min'  => 10,
				'max'  => 4000,
				'step' => 10,
	),				
		) ) );
	
		$wp_customize->add_setting('back_button_background_color', array(         
		'default'     => ' ',
		'sanitize_callback' => 'sanitize_hex_color'
		)); 	
		$wp_customize->add_setting('back_top_button_color', array(         
		'default'     => ' ',
		'sanitize_callback' => 'sanitize_hex_color'
		)); 	

		$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'back_top_button_color', array(
		'label' => __('Button Color', 'the-score'),        
		'section' => 'back_to_top',
		'settings' => 'back_top_button_color'
		)));
		
		$wp_customize->add_setting('back_top_button_hover_color', array(         
		'default'     => ' ',
		'sanitize_callback' => 'sanitize_hex_color'
		)); 	

		$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'back_top_button_hover_color', array(
		'label' => __('Button Hover Color', 'the-score'),        
		'section' => 'back_to_top',
		'settings' => 'back_top_button_hover_color'
		)));
		
		$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'back_button_background_color', array(
		'label' => __('Button Background Color', 'the-score'),        
		'section' => 'back_to_top',
		'settings' => 'back_button_background_color'
		)));	
			
		$wp_customize->add_setting('back_button_background_hover_color', array(         
		'default'     => ' ',
		'sanitize_callback' => 'sanitize_hex_color'
		)); 	

		$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'back_button_background_hover_color', array(
		'label' => __('Button Background Hover Color', 'the-score'),        
		'section' => 'back_to_top',
		'settings' => 'back_button_background_hover_color'
		)));
}
add_action( 'customize_register', 'the_score_back_to_top_customize_register' );

/********************************************
* Back to top styles
*********************************************/ 	

function the_score_back_top_method() {

        $back_top_button_color_mod = get_theme_mod( 'back_top_button_color' );
        $back_top_button_hover_color_mod = get_theme_mod( 'back_top_button_hover_color' );
        $back_button_background_color_mod = get_theme_mod( 'back_button_background_color' );
        $back_button_background_hover_color_mod = get_theme_mod( 'back_button_background_hover_color' );
		
		if($back_top_button_color_mod) { $back_top_button_color = "#totop {color: {$back_top_button_color_mod} !important;}";} else {$back_top_button_color ="";}
		if($back_top_button_hover_color_mod) { $back_top_button_hover_color = "#totop:hover {color: {$back_top_button_hover_color_mod} !important;}";} else {$back_top_button_hover_color ="";}
		if($back_button_background_color_mod) { $back_button_background_color = "#totop {background: {$back_button_background_color_mod} !important;}";} else {$back_button_background_color ="";}
		if($back_button_background_hover_color_mod) { $back_button_background_hover_color = "#totop:hover {background: {$back_button_background_hover_color_mod} !important;}";} else {$back_button_background_hover_color ="";}
		
        wp_add_inline_style( 'score-style', 
		$back_top_button_color.$back_top_button_hover_color.$back_button_background_color.$back_button_background_hover_color
		);
}
add_action( 'wp_enqueue_scripts', 'the_score_back_top_method' );		
		
		

/*********************************************************************************************************
* Back to top
**********************************************************************************************************/			
	
function the_score_to_top() {
    echo '<a id="totop" href="#"><span class="dashicons dashicons-arrow-up-alt2"></span></a>';
    }

    add_action( 'wp_head', 'the_score_back_to_top_style' );
    function the_score_back_to_top_style() {
    echo '<style>
    #totop {
		position: fixed;
		right: 40px;
	    z-index: 9999999;
		bottom: 0;
		display: none;
		outline: none;
		background: #634E27;
		width: 55px;
		height: 50px;
		text-align: center;
		color: #FFFFFF;
		padding: 15px;

		-webkit-transition: all 0.1s linear 0s;
		-moz-transition: all 0.1s linear 0s;
		-o-transition: all 0.1s linear 0s;
		transition: all 0.1s linear 0s;
		font-family: \'Tahoma\', sans-serif;
		}
		#totop .dashicons {
			font-size: 24px;		
		}
		#totop:hover {
			opacity: 0.8;	
		}
		
	#totop .dashicons{
		display: block;
	}
    </style>';
    }

    add_action( 'wp_footer', 'the_score_to_top_script' );
    function the_score_to_top_script() { ?>
    <script type="text/javascript">
		jQuery("body").ready(function($){
			$(window).on("scroll", function () {
			if ( $(this).scrollTop() > 500 )
				$("#totop").fadeIn();
				else
				$("#totop").fadeOut();
			});

			$("#totop").on("click", function () {
				$("body,html").animate({ scrollTop: 0 }, <?php if(get_theme_mod('aback_to_top_speed')){echo  get_theme_mod('aback_to_top_speed');} else { echo "800"; } ?> );
				return false;
			});
		});
    </script>
    <?php }		