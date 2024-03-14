import { DateRange } from "./DateRangeDisplay.tsx";

export type EducationExperience = {
    university: '云南大学' | '中国科学技术大学' | string,
    dateRange: DateRange,
    city: '苏州' | '昆明' | string,
    major: '软件工程' | string,
    degree: '本科' | '硕士' | string;
    school: '软件学院' | string,
    GPA: string,
    onGoing: boolean,
}

export const syfEducationItems: EducationExperience[] = [
    {
        university: "中国科学技术大学",
        dateRange: {
            from: '2020年09月',
            to: '2023年06月'
        },
        city: "苏州",
        major: "软件工程",
        school: "软件学院",
        GPA: '3.43',
        onGoing: true,
        degree: "硕士"
    },
    {
        university: "云南大学",
        dateRange: {
            from: '2015年09月',
            to: '2019年06月'
        },
        city: "昆明",
        major: "软件工程",
        school: "软件学院",
        GPA: '3.40',
        onGoing: false,
        degree: "本科",
    },
];

