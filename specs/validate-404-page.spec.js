/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );
const { URLS } = require( '../utils/urls.js' );

test.describe( 'Validate 404 page', () => {
	test.beforeEach( async ( { page } ) => {
		await page.goto( URLS.pageNotFound, {
			waitUntil: 'load',
			timeout: 0,
		} );
	} );
	test( 'should validate 404 page', async ( { page } ) => {
		// Expect successful heading on 404 page
		await expect(
			page.locator( '#h-oops-the-page-can-t-be-found-1' )
		).toHaveText( 'Oops! The page can’t be found.' );

		// Expect successful search title on 404 page
		await expect( page.locator( '#h-maybe-try-to-search' ) ).toHaveText(
			'Maybe try to search?'
		);

		// Expect successful search button on 404 page
		await expect(
			page.locator( 'role=button[name="Search"i]' )
		).toHaveText( 'Search' );
	} );

	test( 'should search content on 404 page', async ( { page } ) => {
		await page.locator( '#wp-block-search__input-1' ).fill( 'ab@#*j874' );
		await page.click( 'role=button[name="Search"i]' );

		// Expect successful heading on 404 page
		await expect( page.locator( '.page-title' ) ).toHaveText(
			'Results for "ab@#*j874"'
		);
	} );
} );
