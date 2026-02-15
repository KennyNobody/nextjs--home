import { ArticlePostType } from 'entities/Post';

const addRandomNulls = (inputArray: ArticlePostType[]): (ArticlePostType | null)[] => {
    const resultArray: (ArticlePostType | null)[] = [];
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
