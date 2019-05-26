import { Dice, Face } from "../DiceModel/index";
import { RandomSeed } from "random-seed";

export interface RollOutcome {
    rollOutCome: Face[];
}

export interface Histogram {
    name: string;
    data: number[];
}

export function getDimensions(iterations: RollOutcome[]): string[] {
    const dimensions: string[] = [];
    for (let iteration = 0; iteration < iterations.length; iteration++) {
        const outcomeFaces = iterations[iteration].rollOutCome;
        for (let face = 0; face < outcomeFaces.length; face++) {
            for (const key in outcomeFaces[face]) {
                if (outcomeFaces[face].hasOwnProperty(key)) {
                    if (dimensions.indexOf(key) === -1) {
                        dimensions.push(key);
                    }
                }
            }
        }
    }

    return dimensions.sort((a: string, b: string) => {
        return a.localeCompare(b);
    });
}

export function getHistograms(
    outcomes: RollOutcome[],
    dimensions: string[]
): Histogram[] {
    const histograms = [];
    for (let dimension = 0; dimension < dimensions.length; dimension++) {
        const dimensionName = dimensions[dimension];
        histograms.push({
            name: dimensionName,
            data: getHistogram(outcomes, dimensionName),
        });
    }
    return histograms;
}

export function getHistogram(
    iterations: RollOutcome[],
    dimension: string
): number[] {
    let histogram: number[] = [];

    for (let index = 0; index < iterations.length; index++) {
        const faces = iterations[index].rollOutCome;
        let iterationTotal = getValuesOfDimension(faces, dimension);

        if (histogram[iterationTotal] == null) {
            histogram[iterationTotal] = 1;
        } else {
            histogram[iterationTotal]++;
        }
    }
    return histogram;
}

export function getValuesOfDimension(faces: Face[], dimension: string) {
    let iterationTotal = 0;
    for (let face = 0; face < faces.length; face++) {
        const result = faces[face][dimension];
        if (result != null) {
            iterationTotal += result != null ? result : 0;
        }
    }
    return iterationTotal;
}

export function generateRoll(
    activeDice: Dice[],
    randomSeed: RandomSeed
): Face[] {
    const rolls: any[] = [];
    activeDice.forEach((item, index) => {
        rolls.push(item.roll(randomSeed));
    });
    return rolls;
}
