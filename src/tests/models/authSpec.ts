import UserModel from '../../models/user.model'
import dbclient from '../../db/db'
import User from '../../types/user.type'

const userModel = new UserModel()

describe('Authentication Module', () => {
  describe('Test Methods Exists', () => {
    it('should have a method to authenticate a user', () => {
      expect(userModel.authenticateUser).toBeDefined()
    })
  })
})
