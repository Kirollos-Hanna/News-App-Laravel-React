<?php

namespace App\Nova\Filters;

use App\Models\Status;
use Illuminate\Http\Request;
use Laravel\Nova\Filters\BooleanFilter;

class FilterFavoriteByStatus extends BooleanFilter
{
    /**
     * The filter's component.
     *
     * @var string
     */
    // public $component = 'select-filter';

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
        $favorites = [];
        $hasValue = false;
        for ($i = 1; $i <= count($value); $i++) {
            if ($value[$i]) {
                $hasValue = true;
                $status = Status::find($i);
                foreach ($status->favorite as $favorite) {
                    array_push($favorites, $favorite->id);
                }
            }
        }

        if ($hasValue) {
            return $query->whereIn('id', $favorites);
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
        return Status::pluck('id', 'status')->toArray();
    }
}
