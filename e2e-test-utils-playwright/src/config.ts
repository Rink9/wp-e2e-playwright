const WP_ADMIN_USER = {
	username: 'lutfun.naher',
	password: 'iwy%tCiGNqx6xw5S',
} as const;

const {
	WP_USERNAME = WP_ADMIN_USER.username,
	WP_PASSWORD = WP_ADMIN_USER.password,
	WP_BASE_URL = 'https://rtcamp2-preprod.go-vip.net/rtcamp/',
} = process.env;

export { WP_ADMIN_USER, WP_USERNAME, WP_PASSWORD, WP_BASE_URL };
