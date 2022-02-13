import { getRoverManifest } from "../services/mars-photo-api/getRoverManifest";
import { useQuery } from "react-query";

export const useManifests = () => useQuery("manifests", getRoverManifest);
