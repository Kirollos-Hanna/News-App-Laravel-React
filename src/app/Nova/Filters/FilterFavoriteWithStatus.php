<?php

namespace App\Nova\Filters;

use App\Models\Favorite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Laravel\Nova\Filters\Filter;

class FilterFavoriteWithStatus extends Filter
{
    /**
     * The filter's component.
     *
     * @var string
     */
    public $component = 'select-filter';

    /**
     * Apply the filter to the given query.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply(Request $request, $query, $value)
    {
        $favorites = $value == 1 ? Favorite::withTrashed()->has('status')->get() : Favorite::withTrashed()->doesntHave('status')->get();
        $filteredFavorites = [];

        foreach ($favorites as $favorite) {
            array_push($filteredFavorites, $favorite->id);
        }
        if ($filteredFavorites) {
            return $query->whereIn('id', $filteredFavorites);
        }
        return $query;
    }

    /**
     * Get the filter's available options.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function options(Request $request)
    {
        return [
            'No Status' => 0,
            'Status' => 1,
        ];;
    }
}
