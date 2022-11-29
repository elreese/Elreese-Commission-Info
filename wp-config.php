<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'elreese_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'PoL%>k@c!!i??)Y%}4K=1!v8H&)!xr=|QMW;1WLK].g/w8J=3/629)0T%Ixn8,hD' );
define( 'SECURE_AUTH_KEY',  'EZjc4R#`sOvP%LM{^I`6eh>)DxJ96/_aN1oTkMuI*RI/p{;_16pPvAVf9eDfJc+9' );
define( 'LOGGED_IN_KEY',    '3YfE53GJ:[LXT-%+LTVI(T:7yQlu6<bT)cdeM^)]zZkC2Ck=<%t*3[ zqe,+67A3' );
define( 'NONCE_KEY',        '7l2Kr[Xgw9D`Q.k,Q,8CLz-^(XWHU1B`?{%`J]dn#8u@Y#sRzeT<Q!{-#]7K-~m_' );
define( 'AUTH_SALT',        't}b-ztkN^uDt^tz&bL(PIjCjKIq}2F8HMnZext!Ykwr8bnKe:yWwiIsv!tbC[nB*' );
define( 'SECURE_AUTH_SALT', 'u:m!g_Lpn5*ZSGU<Q]b3`{^,$(/1zt<Mjx$s/_1?f3>0~amL_1]G}cP1scj00wP~' );
define( 'LOGGED_IN_SALT',   '_uT|A-Eit9YoXg8K;9.hIN(.%SQ]|6GXEMWd7}+8(glE_]ZM)%aKCorG0o]&<qff' );
define( 'NONCE_SALT',       '3,V}oDg12<5_OYR<)~&R%}LZ@J9og#P_{p2/46rHJ1_tZI(0imm$b+=WSJzoZa*2' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
