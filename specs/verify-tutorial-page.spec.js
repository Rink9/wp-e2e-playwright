/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );
const { URLS } = require( '../utils/urls.js' );

test.describe( 'Validate Scroll top to bottom on tutorial page', () => {
	test.beforeEach( async ( { page } ) => {
		await page.goto( URLS.tutorial, {
			waitUntil: 'load',
			timeout: 0,
		} );
	} );

	test( 'should validate top to bottom on tutorial page', async ( {
		page,
	} ) => {
		// Scroll and validate top button from homepage
		await page.click( 'role=link[name="TOP ↑"i]' );
		// Expect successful scrolling to top
		await expect( page.locator( '.page-title' ) ).toHaveText( 'Tutorials' );
	} );

	test( 'should validate single tutorial page', async ( { page } ) => {
		// Click on tutorial single page
		await page.click(
			'role=link[name="Amazon ELB and multi-domain SAN/SSL Setup"i]'
		);
		// Expect successful content
		await expect( page.locator( '.entry-title' ) ).toHaveText(
			'Amazon ELB and multi-domain SAN/SSL Setup'
		);
	} );

	test( 'should validate sticky top', async ( { page } ) => {
		// Expect successful content
		await expect( page.locator( '#h-working-at-rtcamp' ) ).toHaveText(
			'Working at rtCamp'
		);
		await expect( page.locator( '#h-open-positions' ) ).toHaveText(
			'Open positions'
		);
	} );

	test( 'should validate view more button', async ( { page } ) => {
		await page.click( 'role=link[name="View more"i]' );
		await expect( page ).toHaveURL( /careers/ );
	} );
} );
