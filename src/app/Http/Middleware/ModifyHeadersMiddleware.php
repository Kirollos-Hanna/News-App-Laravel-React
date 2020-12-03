<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ModifyHeadersMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);
        $response->header('Access-Control-Allow-Origin', '*');
        $response->header('Access-Control-Allow-Credentials', 'true');
        $response->header('Access-Control-Allow-Methods', "GET,HEAD,OPTIONS,POST,PUT");
        $response->header('Access-Control-Allow-Headers', 'Origin, Content-Type, x-api-key, authorization, Access-Control-Allow-Headers, Accept, X-Requested-With, Access-Control-Request-Method, Access-Control-Request-Headers');

        return $response;
    }
}
