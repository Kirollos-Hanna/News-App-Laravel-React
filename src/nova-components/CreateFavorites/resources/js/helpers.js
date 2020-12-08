export function parseUserResponse(response) {
    let resources = response.data.resources;
    let users = [];

    resources.map((user) => {
        users.push({ name: user.title, id: user.id.value });
    });
    return users;
}
