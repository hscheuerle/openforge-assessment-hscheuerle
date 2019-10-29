export interface UserBasic {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface SearchedUser extends UserBasic {
    score: number;
    text_matches: {
        object_url: string;
        object_type: string;
        property: string;
        fragment: string;
    }[];
}

export interface SeachedUserSuccessPayload {
    total_count: number;
    incomplete_results: boolean;
    items: SearchedUser[];
}

export interface UserDetailed extends UserBasic {
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean | null;
    bio: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}