 function findSingle(ar, ar_size)
    {
        // Do XOR of all elements and return
        let res = ar[0];
        for (let i = 1; i < ar_size; i++)
            res = res ^ ar[i];
 
        return res;
    }

        let ar = [2, 3, 5, 4, 5, 3, 4];
        let n = ar.length;
        document.write("Element occurring once is "
            + findSingle(ar, n));
     

 
