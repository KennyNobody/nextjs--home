import { PostArticleType } from 'entities/Post';

const addRandomNulls = (inputArray: PostArticleType[]): (PostArticleType | null)[] => {
    const resultArray: (PostArticleType | null)[] = [];
    const nullInterval = 12;
    const nullPosition = [1, 2, 4, 5];

    for (let i = 0; i < inputArray.length; i += 1) {
        resultArray.push(inputArray[i]);

        if (nullPosition.includes(i % nullInterval)) {
            resultArray.push(null);
        }
    }

    return resultArray;
};

export {
    addRandomNulls,
};
