export interface DataItem {
    id: number;
    name: string;
    value: number;
    itemStyle?: {
        color: string;
    };
}

export interface LineDataItem {
    fromName: string;
    toName: string;
    time: string;
    reason?: string;
    coords?: number[][];
}

export interface PointInfoItem {
    id: string;
    name: string;
    address: string;
    mapToPointData: number;
    time: string;
    detail: string;
    imgList?: string[];
    videoList?: string[];
}