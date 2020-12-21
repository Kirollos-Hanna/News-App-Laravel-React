<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Illuminate\Support\Str;
use Illuminate\Foundation\Testing\WithFaker;

class CreateFavoritesTest extends DuskTestCase
{

    use withFaker;

    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testExample()
    {

        $favorites = [];
        for ($i = 0; $i < 5; $i++) {
            $favorites[] = [
                'title' => $this->faker->unique()->sentence(5),
                'author' => $this->faker->name(),
                'source' => $this->faker->url(),
                'posting_date' => $this->faker->date('d/m/Y')
            ];
        }

        $this->browse(function (Browser $browser) use ($favorites) {
            $browser->loginAs(User::find(1))->visit('/nova/create-favorites');

            for ($i = 0; $i < 5; $i++) {
                $browser->type('@Article Title', $favorites[$i]['title'])
                    ->type('@Author', $favorites[$i]['author'])
                    ->type('@Article Source', $favorites[$i]['source'])
                    ->type('@Post Date', $favorites[$i]['posting_date'])
                    ->select('@User')
                    ->press('Create Favorite');
            }
            $browser->pause(100);
        });


        for ($i = 0; $i < 5; $i++) {
            $this->assertDatabaseHas('favorites',  [
                'title' => $favorites[$i]['title'],
                'author' => $favorites[$i]['author'],
                'source' => $favorites[$i]['source']
            ]);
        }
    }
}
