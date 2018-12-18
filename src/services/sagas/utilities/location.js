import { isEqual, omit } from 'lodash';

const areLocationsEqual = (prevLocation, nextLocation) => {
    const omitProps = ['key', 'action'];

    return isEqual(
        omit(prevLocation, omitProps),
        omit(nextLocation, omitProps),
    );
};

export const shouldRunRouteActions = (
    prevAction,
    nextAction,
    skipEqualLocations,
) =>
    (skipEqualLocations &&
        !areLocationsEqual(prevAction.payload, nextAction.payload)) ||
    !skipEqualLocations;
