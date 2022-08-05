import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        colors: {
            detailsOne: string;
            detailsTwo: string;
            detailsThree: string;
            detailsFour: string;
            detailsFive: string;
            detailsSix: string;
            backgroundOne: string;
            backgroundTwo: string;
            backgroundThree: string;
            textOne: string;
            textTwo: string;
            textThree: string;
            textFour: string;
        };
        fontSizes: {
            small: string;
            medium: string;
            large: string;
        };
    }

    export interface CustomTheme {
        title: string;
        colors: {
            detailsOne: string;
            detailsTwo: string;
            detailsThree: string;
            detailsFour: string;
            detailsFive: string;
            detailsSix: string;
            backgroundOne: string;
            backgroundTwo: string;
            backgroundThree: string;
            textOne: string;
            textTwo: string;
            textThree: string;
            textFour: string;
        };
    }
}
