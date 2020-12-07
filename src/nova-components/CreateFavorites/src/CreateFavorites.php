<?php

namespace Acme\CreateFavorites;

use Laravel\Nova\Nova;
use Laravel\Nova\Tool;

class CreateFavorites extends Tool
{
    /**
     * Perform any tasks that need to happen when the tool is booted.
     *
     * @return void
     */
    public function boot()
    {
        Nova::script('create-favorites', __DIR__.'/../dist/js/tool.js');
        Nova::style('create-favorites', __DIR__.'/../dist/css/tool.css');
    }

    /**
     * Build the view that renders the navigation links for the tool.
     *
     * @return \Illuminate\View\View
     */
    public function renderNavigation()
    {
        return view('create-favorites::navigation');
    }
}
