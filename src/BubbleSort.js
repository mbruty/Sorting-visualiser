//Best: O(n) time - O(1) Space
//Average: O(n^2) time - O(1) Space
//Worst: O(n^2) time - O(1) Space

import timeout from './Delay'
export default async function bubbleSort({data, delay, callback}){
    let isSorted = false;
    let counter = 0;
    while(!isSorted){

        //Assume that it's sorted, until proven otherwise
        isSorted = true;
        for(let i = 0; i < data.length - 1 - counter; i++){
            if (data[i] > data[i+1]){
                swap(i, i + 1, data);
                isSorted = false;
            }
            callback(data);
            await timeout(delay);
        }
        counter++;
    }
}

function swap(i, j, array){
    const tempItem = array[j];
    array[j] = array[i];
    array[i] = tempItem;
}
