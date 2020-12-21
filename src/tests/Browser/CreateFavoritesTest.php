<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Illuminate\Support\Str;

class CreateFavoritesTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/nova/login');
            $browser->type('email', 'admin@newsapp.com');
            $browser->type('password', '123456789');
            $browser->press('Login');

            $browser->visit('/nova/create-favorites');
            for ($i = 0; $i < 10; $i++) {
                $browser->type('Article Title', Str::random(32));
                $browser->type('Author', 'Test');
                $browser->type('Article Source', 'test.com');
                $browser->type('Post Date', '21/12/2020');
                $browser->select('User', '1');
                $browser->press('Create Favorite');
            }
        });
    }
}
