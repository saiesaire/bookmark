class BookmarksController < ApplicationController
  def index
    @lists = List.all
    @gernes = Gerne.all
    gon.bookmarks = @lists
  end

  def show
    @bookmark = List.find(params[:id])
  end

  def new
    list = List.new
    @gernes = Gerne.all
  end

  def create
    @list = List.new(bookmark_params)
    @list.save
    redirect_to action: :index
  end

  def destroy
    bookmark = List.find(params[:id])
    bookmark.destroy
    redirect_to action: :index 
  end

  private
  def bookmark_params
    params.permit(:name, :url, :gerne, :reason)
  end
end
