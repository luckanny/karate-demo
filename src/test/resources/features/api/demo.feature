@api
Feature: User API Tests

  Background:
    * url baseUrl
    * header Accept = 'application/json'
    * def testUser = read('classpath:test-data/users.json')

  Scenario: Create new user
    Given path '/api/users'
    And request { name: '#(testUser.name)', job: '#(testUser.job)' }
    When method post
    Then status 201
    * print response.text
#   And match response ==
#    """
#    {
#      id: '#notnull',
#      name: '#(testUser.name)',
#      job: '#(testUser.job)'，
#      createdAt: '#notnull'
#    }
#    """

  Scenario: Get user by ID
    Given path '/api/users?page=2'
    When method get
    Then status 200
    And match response contains { page: '#number', per_page: '#number' }