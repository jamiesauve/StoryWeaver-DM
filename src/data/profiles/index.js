import dalymbiaDK from './dalymbia-DK';
import dalymbiaPK from './dalymbia-PK';

const profiles = {
    dalymbiaDK,
    dalymbiaPK,
}

export default (profileName) => {
    return profiles[profileName];
}