<?php

namespace App\GraphQL\Types;

use App\Models\User;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class UserType extends GraphQLType
{
    protected $attributes = [
        'name' => 'User',
        'description' => 'A User of the Application',
        'model' => User::class
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id of the User',
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The name of the User',
            ],
            'email' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The email of the User',
            ],
            'password' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The User\'s Hashed Password',
            ]
        ];
    }
}
