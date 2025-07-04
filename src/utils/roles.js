const ROLES = {
  ADMIN: '68636b2700277e54b95b',
  MODERATOR: 'some-other-id',
};

export function isAdmin(user) {    
  return user?.$id === ROLES.ADMIN;
}

export function isModerator(user) {
  return user?.$id === ROLES.MODERATOR;
}

export { ROLES };
