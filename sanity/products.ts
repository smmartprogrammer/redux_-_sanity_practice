import React from 'react'

export const Products =  {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "title",
            title:"Title",
            type: "string"
        },{
            name: "category",
            title:"Category",
            type: "string"
        },
        {
            name: "price",
            title:"Price",
            type: "number"
        },
        {
            name: "image",
            title:"Product Image",
            type: "image",
        },
        {
            name: "gender",
            title:"Gender",
            type: "string"
        },
    ]
}

