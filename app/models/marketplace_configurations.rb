# == Schema Information
#
# Table name: marketplace_configurations
#
#  id            :integer          not null, primary key
#  community_id  :integer          not null
#  main_search   :string(255)      default("keyword"), not null
#  distance_unit :string(255)      default("metric"), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_marketplace_configurations_on_community_id  (community_id)
#

class MarketplaceConfigurations < ActiveRecord::Base

end
