function hasAvaliableRooms(avaliableRooms) {
  return avaliableRooms.length > 0
    ? avaliableRooms
    : "Sem quartos disponíveis no momento"
}

module.exports = hasAvaliableRooms
