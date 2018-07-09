var Schemas = {
  FIX_ME: 'wrong answer',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

var sqlPublisherAuthorSchema =  Schemas.OPTION_6; // TODO: Update this constant
// Since there is only one genre, we don't have to worry about the genre table.  Since there are many publishers and authors, this is a many to many relationship, so there should be foreign keys from both tables in a common table.

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// This is a many to one relationship.  Each publisher entry should have a genre id key used as a foreign key, mapping to the id key in the genre table.

var sqlAuthorGenreSchema =  Schemas.FIX_ME; // TODO: Update this constant
// As with the publisher-author schema, both tables should have their foreign keys pointing to a common table.