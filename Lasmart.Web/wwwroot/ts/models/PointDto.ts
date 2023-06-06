import {CommentDto} from "./CommentDto";

export class PointDto {
    id: number;
    x: number;
    y: number;
    radius: number;
    color: string;
    comments: Array<CommentDto>
}