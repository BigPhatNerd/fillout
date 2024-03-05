const axios = require('axios');

const formResponsesController = {
  async getResponses(req,res){

  const { formId } = req.params;
  const { page, pageSize, filters } = req.query;
  const parsedFilters = JSON.parse(filters);

  try {
    const response = await axios.get(`https://api.fillout.com/v1/api/forms/${formId}/submissions`, {
      headers: { 'Authorization': `Bearer ${process.env.FILLOUT_API_KEY}` },
      params: { page, pageSize } 
    });
    console.log({page, pageSize})

    let filteredResponses = response.data.responses.filter(response => {
      return parsedFilters.every(filter => {
        const question = response.questions.find(q => q.id === filter.id);
        if (!question) return false;

        switch (filter.condition) {
          case 'equals':
            return question.value === filter.value;
          case 'does_not_equal':
            return question.value !== filter.value;
         case 'greater_than':
        
        if (typeof filter.value === 'number' || !isNaN(filter.value)) {
          return Number(question.value) > Number(filter.value);
        } else if (Date.parse(filter.value)) {
          return new Date(question.value) > new Date(filter.value);
        }
        return false; 
      case 'less_than':
        if (typeof filter.value === 'number' || !isNaN(filter.value)) {
          return Number(question.value) < Number(filter.value);
        } else if (Date.parse(filter.value)) {
          return new Date(question.value) < new Date(filter.value);
        }
        return false;
          default:
            return false;
        }
      });
    });

    
    const modifiedResponse = {
      ...response.data,
      responses: filteredResponses,
      totalResponses: filteredResponses.length,
      
      pageCount: Math.ceil(filteredResponses.length / pageSize)
    };

    res.json(modifiedResponse);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching form responses');
  }
    }
}

module.exports = formResponsesController;