/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );
const { URLS } = require( '../utils/urls.js' );

test.describe( 'Validate hompage top to bottom and buttons', () => {
	test.beforeEach( async ( { page } ) => {
		await page.goto( URLS.homepage );
	} );

	test( 'should validate scroll bottom to top', async ( { page } ) => {
		// Scroll and validate top button from homepage
		await page.click( 'role=link[name="TOP ↑"i]' );

		// Expect successful scrolling to top
		await expect( page.locator( '#h-good-work-good-people' ) ).toHaveText(
			'Good Work. Good People.'
		);
	} );

	test( 'should validate our work button', async ( { page } ) => {
		await page.click( 'role=link[name="Our Work"i]' );
		await expect( page ).toHaveURL( /case-studies/ );
		await expect( page.locator( '.page-title' ) ).toHaveText(
			'Case Studies'
		);
	} );

	test( 'should validate contact us button', async ( { page } ) => {
		await page.click( 'role=link[name="Contact Us"i]' );
		await expect( page ).toHaveURL( /contact/ );
		await expect( page.locator( '#h-contact-us' ) ).toHaveText(
			'Contact Us'
		);
	} );

	test( 'should validate all case studies button', async ( { page } ) => {
		await page.click( 'role=link[name="View all Case Studies"i]' );
		await expect( page ).toHaveURL( /case-studies/ );
		await expect( page.locator( '.page-title' ) ).toHaveText(
			'Case Studies'
		);
	} );
} );
