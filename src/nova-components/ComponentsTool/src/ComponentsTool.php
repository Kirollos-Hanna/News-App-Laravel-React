<?php

namespace Newsapi\ComponentsTool;

use Laravel\Nova\ResourceTool;

class ComponentsTool extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Components Tool';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'components-tool';
    }
}
