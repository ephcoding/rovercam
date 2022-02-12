import { getManifests } from "../services/mars-photo-api/get-manifests";
import { useQuery } from "react-query";

export const useManifests = () => useQuery("manifests", getManifests);
