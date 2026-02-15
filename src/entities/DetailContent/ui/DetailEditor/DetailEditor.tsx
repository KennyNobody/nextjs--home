import classNames from 'classnames';
import {
    Skeleton,
    SkeletonMode,
} from 'shared/ui/Skeleton/Skeleton';
import {
    BlocksRenderer,
    type BlocksContent,
} from '@strapi/blocks-react-renderer';
import cls from './DetailEditor.module.scss';
import { Editor } from 'shared/ui/Editor/Editor';
import { DetailLink } from '../DetailLink/DetailLink';
import { DetailCode } from '../DetailCode/DetailCode';
import { DetailList } from '../DetailList/DetailList';
import { DetailQuote } from '../DetailQuote/DetailQuote';
import { DetailPicture } from '../DetailPicture/DetailPicture';
import { DetailHeading } from '../DetailHeading/DetailHeading';
import { DetailParagraph } from '../DetailParagraph/DetailParagraph';

interface DetailEditorProps {
    className?: string;
    data: BlocksContent;
    isLoading?: boolean;
}

export const DetailEditor = (props: DetailEditorProps) => {
    const {
        data,
        isLoading,
        className,
    } = props;

    return (
        <div
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <Editor className={classNames(cls.editor)}>
                {
                    isLoading
                    && (
                        <DetailParagraph>
                            <Skeleton
                                strings={40}
                                mode={SkeletonMode.LINES}
                            />
                        </DetailParagraph>
                    )
                }
                {
                    !isLoading
                    && data
                    && (
                        <BlocksRenderer
                            content={data}
                            blocks={{
                                paragraph: ({ children }) => DetailParagraph({ children }),
                                // @ts-ignore
                                image: ({ image }) => DetailPicture({ image }),
                                heading: ({ children, level }) => DetailHeading({ children, level }),
                                link: ({ children, url }) => DetailLink({ children, url }),
                                code: ({ children }) => DetailCode({ children }),
                                list: ({ children, format }) => DetailList({ children, format }),
                                quote: ({ children }) => DetailQuote({ children }),
                            }}
                        />
                    )
                }

            </Editor>
        </div>
    );
};
