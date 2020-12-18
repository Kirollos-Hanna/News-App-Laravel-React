<?php

namespace App\Nova\Filters;

use App\Models\Favorite;
use Illuminate\Http\Request;
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
        $favorites = Favorite::withTrashed()->get()->all();
        $filteredFavoritesWithStatus = [];
        $filteredFavoritesWithoutStatus = [];

        foreach ($favorites as $favorite) {
            if (count($favorite->status) > 0) {
                array_push($filteredFavoritesWithStatus, $favorite->id);
            } else {
                array_push($filteredFavoritesWithoutStatus, $favorite->id);
            }
        }

        if ($value) {
            return $filteredFavoritesWithStatus ? $query->find($filteredFavoritesWithStatus) : $query->find("");
        }

        return $filteredFavoritesWithoutStatus ? $query->find($filteredFavoritesWithoutStatus) : $query->find("");
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
