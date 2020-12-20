<?php

namespace App\Nova\Filters;

use App\Models\Status;
use Illuminate\Database\Eloquent\Builder;
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
        $noFilter = true;
        foreach ($value as $val) {
            if ($val) {
                $noFilter = false;
            }
        }
        if ($noFilter) {
            return $query;
        }

        $idValues = [];
        foreach ($value as $key => $val) {
            if ($val) {
                array_push($idValues, $key);
            }
        }
        if ($value["None"]) {
            $query->withTrashed()->doesntHave('status');
        }
        return $query->orWhereHas('status', function (Builder $query) use ($idValues) {
            $query->whereIn('id', $idValues);
        });
    }

    /**
     * Get the filter's available options.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function options(Request $request)
    {
        $options = Status::pluck('id', 'status')->toArray();
        $options['No Status'] = "None";
        return $options;
    }
}
