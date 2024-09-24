import React, { useState, useEffect } from 'react';
import axios from 'axios';
import withRoleAccess from '../context/WithRoleAccess.jsx';

const ClanEditor = ({ clanId }) => {
  const [clan, setClan] = useState(null);

  useEffect(() => {
    const fetchClan = async () => {
      try {
        const response = await axios.get(`/api/clans/${clanId}`);
        setClan(response.data);
      } catch (error) {
        console.error('Error fetching clan:', error);
      }
    };

    fetchClan();
  }, [clanId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/clans/${clanId}`, clan);
      alert('Clan updated successfully');
    } catch (error) {
      console.error('Error updating clan:', error);
    }
  };

  if (!clan) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={clan.name}
        onChange={(e) => setClan({ ...clan, name: e.target.value })}
      />
      <textarea
        value={clan.description}
        onChange={(e) => setClan({ ...clan, description: e.target.value })}
      />
      <textarea
        value={clan.history}
        onChange={(e) => setClan({ ...clan, history: e.target.value })}
      />
      <textarea
        value={clan.traditions}
        onChange={(e) => setClan({ ...clan, traditions: e.target.value })}
      />
      <button type="submit">Update Clan</button>
    </form>
  );
};

export default ClanEditor;

export const ClanEditorWithAccess = withRoleAccess(['EDITOR', 'ADMIN'])(ClanEditor);