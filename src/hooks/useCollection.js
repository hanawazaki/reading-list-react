import { useState, useEffect, useRef } from 'react'
import { db } from '../firebase/config'
//firebase import
import { collection, onSnapshot, query, where } from 'firebase/firestore'

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null)

  //query
  const q = useRef(_q).current

  useEffect(() => {
    let ref = collection(db, c)

    if (q) {
      ref = query(ref, where(...q))
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let res = []
      snapshot.docs.forEach(doc => {
        res.push({
          id: doc.id,
          ...doc.data()
        })
      });
      console.log("res", res)
      setDocuments(res)
    })

    return () => unsub()
  }, [c, q])

  return { documents }
}
