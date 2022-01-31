'use strict';

{
   element: 'body',
   attributes: null,
   childeren: [
      {
         element: 'header',
         attributes: null,
         childeren: [
            
            {
               element: 'img',
               attributes: {
                  src: 'logo.svg'
                  alt: 'logo react'
               },
               childeren: []
            },
            {
               element: 'h1',
               attributes: null,
               childeren: [
                  {
                     element: 'TextNode',
                     attributes: null,
                     childeren: 'Hello React',
                  }
               ]
            }
         ]
      },
      {
         element: 'main',
         attributes: null,
         childeren: [
            {
               element: 'p',
               attributes: null,
               childeren: [
                  {
                     element: 'TextNode',
                     attributes: null,
                     childeren: 'A JavaScript library for building UIs',
                  }
               ]
            }
         ]
      }
   ]
}
