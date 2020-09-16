const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')

const user1 = {
    id: 1,
    username: 'thuong',
    room: '113'
}
const user2 = {
    id: 2,
    username: 'dong',
    room: '113'
}
test('adds user', () => {
    expect(addUser(user1)).toEqual({ user: user1 });
});
test('adds user', () => {
    expect(addUser(user2)).toEqual({ user: user2 });
});
test('get user', () => {
    expect(getUser(user1.id)).toEqual(user1);
});
test('get users in room', ()=>{
    expect(getUsersInRoom(user1.room)).toContainEqual(user2)
})

test('get users in room', ()=>{
    expect(getUsersInRoom(user2.room)).toEqual([user1, user2])
})
// user = { id: 1, name: 'thuong'}
// student = {user:} =  {user: { id: 1, name: 'thuong'}}
// student = 
test('remove user', () => {
    expect(removeUser(user1.id)).toEqual(user1);
});

test('get users in room', ()=>{
    expect(getUsersInRoom(user1.room)).not.toContainEqual(user1)
})
