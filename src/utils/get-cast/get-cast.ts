import { APICastResponse } from "@/types";

import { API } from "../constants";

export function getCast({ cast }: APICastResponse) {
  return cast.map((person) => ({
    id: person.id,
    name: person.name,
    profile: person.profile_path,
    character: person.character,
    photo: `${API.POSTER}${person.profile_path}`,
  }))
}