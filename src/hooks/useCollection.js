// import { useEffect, useState, useRef } from "react"
// import { projectFirestore } from "../firebase/config"

// export const useCollection = (collection, _query, _orderBy) => {


//     // if we don't use a ref --> infinite loop in useEffect
//     // _query is an array and is "different" on every function call
//     const query = useRef(_query).current
//     const orderBy = useRef(_orderBy).current


//         let ref = projectFirestore.collection(collection)

//         if (query) {
//             ref = ref.where(...query)
//         }
//         if (orderBy) {
//             ref = ref.orderBy(...orderBy)
//         }

//        const getDocument= async ()=>{
//             const doc= await ref.get();
//             return doc;
//        }

//     return { getDocument}
// }

import { useEffect, useState, useRef } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = () => {


    const getDocument = async (collection, query1, query2, orderBy) => {
        let ref = projectFirestore.collection(collection);

        if (query1 && query2) {
            ref = ref.where(...query1).where(...query2);
        }

        if (orderBy) {
            ref = ref.orderBy(...orderBy);
        }
        try {
            const doc = await ref.get();
            return doc;
        } catch (e) {
            console.log("cos poszło nie tak przy pobieraniu planu dla ciebie")
        }


    };

    return { getDocument };
};