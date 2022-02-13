import { getManifests } from "../services/mars-photo-api/getRoverManifest";
import { useQuery } from "react-query";

export const useManifests = () => useQuery("manifests", getManifests);
